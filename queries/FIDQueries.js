const CASINO_UK = `
    SELECT
        lats_week.industry_name AS industry, 
        'Casino UK' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT
                industry_name,
                AVG(fid_bad.value) AS bad_visits_avg,
                AVG(fid_good.value) AS good_visits_avg, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_BAD.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT
                        visit_iid, 
                        action, 
                        AVG(CAST(value AS INTEGER)) AS value
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' AND LEN(value) < 6 AND value * 1 < 250
                    GROUP BY
                        1, 2
                )
                AS fid_good
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT
                        visit_iid, 
                        action, 
                        AVG(CAST(value AS INTEGER)) AS value
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' AND LEN(value) < 6 AND value * 1 > 250
                    GROUP BY
                        1, 2
                )
                AS fid_BAD 
            ON fid_BAD.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30 
            GROUP BY 
                1
        )
    WHERE
        bad_visits + good_visits > 0 AND industry_name IS NOT NULL
`;
