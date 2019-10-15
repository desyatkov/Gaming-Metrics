const Influx = require('influx');

class MetricsWriter {
    constructor(measurement, conf = {}) {
        const {
            // host = 'influxdb01.naturalint.com',
            host = 'localhost',
            database = 'heartbeat'
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
                    'vertical',
                    'metric',
                    'industry'
                ]
            }]
        });
    }

    async writeMetrics(measurement, tags, fields) {
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

    async writeBusinessMetric(vertical, metric, value, color, trend, industry) {
        this.writeMetrics(this.measurement, {vertical, metric, industry}, {color, value, trend});
    }

    async writeBusinessMetrics(data) {
        const inserts = data.map(row => {
            const {
                value,
                color,
                trend,
                metric,
                vertical,
                industry,
            } = row;
            return this.writeBusinessMetric(vertical, metric, value, color, trend, industry);
        });
        return Promise.all(inserts);
    }
}

module.exports = MetricsWriter;

