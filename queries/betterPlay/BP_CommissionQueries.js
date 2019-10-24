const BP_CASINO = `
    SELECT
        last_week.industry_name,
        'BetterPlay - Casino' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General'
                        END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE
                LOWER(ver) = 'casino' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Casino'
            GROUP BY
                1, 2
        ) 
        AS last_week
    INNER JOIN 
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General'
                        END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE
                LOWER(ver) = 'casino' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Casino'
            GROUP BY
                1, 2
        ) 
        AS last_5_weeks 
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

const BP_SPORTS = `
    SELECT
        last_week.industry_name,
        'BetterPlay - Sports' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'  
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE 
                LOWER(ver) = 'sports' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Sports'
            GROUP BY
                1, 2
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE 
                LOWER(ver) = 'sports' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Sports'
            GROUP BY
                1, 2
        )
        AS last_5_weeks  
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY  
        1, 2
`;

const BP_BINGO = `
    SELECT
        last_week.industry_name,
        'BetterPlay - Bingo' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE
                LOWER(ver) = 'bingo' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Bingo'
            GROUP BY
                1, 2
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY  
                        1, 2
                )
            WHERE 
                LOWER(ver) = 'bingo' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Bingo'
            GROUP BY
                1, 2
        )
        AS last_5_weeks  
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY 
        1, 2 
`;

const BP_SLOTS = `
    SELECT
        last_week.industry_name,
        'BetterPlay - Slots' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY  
                        1, 2
                )
            WHERE
                LOWER(ver) = 'slots' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Slots'
            GROUP BY
                1, 2
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                initcap(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY  
                        1, 2
                )
            WHERE 
                LOWER(ver) = 'slots' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Slots'
            GROUP BY
                1, 2
        )
        AS last_5_weeks  
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
    1, 2     
`;

const BP_POKER = `
    SELECT
        last_week.industry_name,
        'BetterPlay - Poker' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks, 
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE 
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY
                        1, 2
                )
            WHERE
                LOWER(ver) = 'poker' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Poker'
            GROUP BY  
                1, 2
        )
    AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                INITCAP(ver) AS ver,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        CASE
                            WHEN a.conversion_date < '2019-09-17' THEN REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(uri, 'https://m.betterplay.com/', ''), 'https://www.betterplay.com/', ''), 'http://m.betterplay.com', ''), 'http://m.betterplay.co.uk', ''), 'http://www.betterplay.com', ''), 'https://www.betterplay.com', ''), 'http://www.betterplay.co.uk', '')
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NOT NULL THEN INITCAP(vertical_name)
                            WHEN a.conversion_date >= '2019-09-17' AND vertical_name IS NULL THEN 'General' END AS ver,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts AS a
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id = 10071
                        AND country_name = 'United Kingdom'
                    GROUP BY  
                        1, 2
                )
            WHERE
                LOWER(ver) = 'poker' OR INITCAP(REPLACE(CASE WHEN ver LIKE '%/%' THEN SUBSTRING(ver, 1, POSITION('/' IN ver)) ELSE ver END, '/', '')) = 'Poker'
            GROUP BY  
                1, 2
        )
        AS last_5_weeks  
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY 
        1, 2
`;

const BP_Queries = {
    'BP_CASINO': BP_CASINO,
    'BP_SPORTS': BP_SPORTS,
    'BP_BINGO': BP_BINGO,
    'BP_SLOTS': BP_SLOTS,
    'BP_POKER': BP_POKER
};

module.exports = {
    BP_Queries
};
