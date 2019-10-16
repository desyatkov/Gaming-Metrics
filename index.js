const Commission = require('./metricReaders/commissions');
const Traffic = require('./metricReaders/traffic');
const CTR = require('./metricReaders/ctr');
const BR = require('./metricReaders/br');
const EPV = require('./metricReaders/epv');

const MetricsWriter = require('./metricsWriter');
const businessMetricWriter = new MetricsWriter('gaming_metrics');

const READERS = {
    'Commission': {read: Commission.getCommission, write: businessMetricWriter},
    'Traffic': {read: Traffic.getTraffic, write: businessMetricWriter},
    'CTR': {read: CTR.getCTR, write: businessMetricWriter},
    'BR': {read: BR.getBR, write: businessMetricWriter},
    'EPV': {read: EPV.getEPV, write: businessMetricWriter},
};

const VERTICALS = [
    'CASINO_UK',
    'SPORTS_UK',
    'BINGO_UK',
    'POKER_UK',
    'SPORTS_AU',
    'SPORTS_FR',
    'SPORTS_RO'
];

exports.handler = async () => {
    await Promise.all(Object.entries(READERS).map(async reader => {
        try {
            console.info(`Getting INFO for ${reader[0]}`);
            await VERTICALS.map(async industry => {
                const data = await reader[1].read(industry);
                await reader[1].write.writeBusinessMetrics(data);
                console.info(`Getting ${reader[0]} for ${industry} is done`);
            });
            console.info(`Getting INFO for ${reader[0]} is done`);
        } catch (e) {
            console.error(`ERROR getting data for ${reader[0]}`, e);
        }
    }));
};
