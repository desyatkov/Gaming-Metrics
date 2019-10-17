const Commission = require('./metricReaders/commissions');
const Traffic = require('./metricReaders/traffic');
const CTR = require('./metricReaders/ctr');
const BR = require('./metricReaders/br');
const EPV = require('./metricReaders/epv');
const FCP = require('./metricReaders/fcp');
const FID = require('./metricReaders/fid');

const MetricsWriter = require('./metricsWriter');
const gamingMetricWriter = new MetricsWriter('gaming_metrics');

const READERS = {
    'Commission': {read: Commission.getCommission, write: gamingMetricWriter},
    'Traffic': {read: Traffic.getTraffic, write: gamingMetricWriter},
    'CTR': {read: CTR.getCTR, write: gamingMetricWriter},
    'BR': {read: BR.getBR, write: gamingMetricWriter},
    'EPV': {read: EPV.getEPV, write: gamingMetricWriter},
    'FCP': {read: FCP.getFCP, write: gamingMetricWriter},
    'FID': {read: FID.getFID, write: gamingMetricWriter}
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
            for(let i = 0; i < VERTICALS.length; i++){
                const data = await reader[1].read(VERTICALS[i]);
                await reader[1].write.writeGamingMetrics(data);
            }
            console.info(`Getting INFO for ${reader[0]} is done`);
        } catch (e) {
            console.error(`ERROR getting data for ${reader[0]}`, e);
        }
    }));
};
