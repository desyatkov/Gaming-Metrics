const Influx = require('influx');

class MetricsWriter {
    constructor(measurement, conf = {}) {
        const {
            host = 'localhost',
            database = 'gaming_metrics'
        } = conf;
        this.measurement = measurement;
        this.influx = new Influx.InfluxDB({
            host,
            database,
            schema: [{
                measurement: this.measurement,
                fields: {
                    value: Influx.FieldType.FLOAT,
                    color: Influx.FieldType.FLOAT,
                    trend: Influx.FieldType.FLOAT
                },
                tags: [
                    'industry',
                    'metric',
                    'vertical'
                ]
            }]
        });
    }

    async writeMetricsToInflux(measurement, tags, fields) {
        try {
            await this.influx.writePoints([
                {
                    measurement: measurement,
                    tags: tags,
                    fields: fields
                }
            ]);
        } catch (e) {
            console.error(e);
        }
    }

    async writeMetric(industry, metric, vertical, value, color, trend) {
        this.writeMetricsToInflux(this.measurement, {industry, metric, vertical}, {value, color, trend});
    }

    async writeMetricsData(data) {
        const inserts = data.map(row => {
            const {
                industry,
                metric,
                vertical,
                value,
                color,
                trend
            } = row;
            return this.writeMetric(industry, metric, vertical, value, color, trend);
        });
        return Promise.all(inserts);
    }
}

module.exports = MetricsWriter;

