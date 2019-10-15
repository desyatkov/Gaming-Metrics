// Blackjack Mobile UK, Casino Mobile UK, Roulette Mobile UK, Slots Mobile UK, Blackjack UK, Casino UK, Roulette UK, Slots UK
const CASINO_UK = `
    SELECT 
        last_week.industry_name AS industry, 
        'Casino UK' AS vertical, 
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(252, 130, 254, 242, 248, 19, 255, 244) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(252, 130, 254, 242, 248, 19, 255, 244) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

// Sports Betting UK, Sports Betting Mobile UK
const SPORTS_UK = `
    SELECT 
        last_week.industry_name AS industry,
        'Sports UK' AS vertical,
        'CTR' AS metric,
        SUM(last_week.CTR) as value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(52, 116) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(52, 116) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

// Bingo Mobile UK, Bingo UK
const BINGO_UK = `
    SELECT
        last_week.industry_name AS industry,  
        'Bingo UK' AS vertical, 
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT 
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM    
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(119, 86) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(119, 86) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        ) 
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY 
        1, 2
`;

// Poker Mobile UK, Poker UK
const POKER_UK = `
    SELECT 
        last_week.industry_name AS industry, 
        'Poker UK' AS vertical, 
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND trunc(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(177, 21) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        ) 
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(177, 21) AND country_name = 'United Kingdom'
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

// HorseRacing Mobile AU, HorseRacing AU, Sports Betting Mobile AU, Sports Betting AU
const SPORTS_AU = `
    SELECT 
        last_week.industry_name AS industry, 
        'Sports AU' AS vertical, 
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(10052, 10059, 284, 10028)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT 
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(10052, 10059, 284, 10028)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

// Sports Betting FR, Sports Betting Mobile FR
const SPORTS_FR = `
    SELECT 
        last_week.industry_name AS industry, 
        'Sports FR' AS vertical, 
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(91, 215)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(91, 215)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        ) 
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

// Sports Betting Mobile RO
const SPORTS_RO = `
    SELECT 
        last_week.industry_name AS industry, 
        'Sports RO' AS vertical,
        'CTR' AS metric,
        SUM(last_week.CTR) AS value,
        ((last_week.CTR - last_5_weeks.CTR) / (last_5_weeks.CTR + 0.001)) AS trend
    FROM
        (
            SELECT 
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) AND traffic_type = 'users' AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' AND site_id IN(10091)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        )
        AS last_week
    INNER JOIN
        (
            SELECT
                industry_name,
                CAST(CAST(SUM(clickouts) AS FLOAT) / CAST(SUM(visits) AS FLOAT) AS FLOAT) AS CTR
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits,
                        COUNT(DISTINCT visit_iid_product) AS clickouts
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BWTWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31)  AND traffic_type = 'users' AND site_name IS NOT NULL
                        and industry_name = 'Gaming' and site_id IN(10091)
                    GROUP BY
                        1
                )
            GROUP BY
                1
        ) 
        AS last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name
    GROUP BY
        1, 2
`;

const queries = {
    'CASINO_UK': CASINO_UK,
    'SPORTS_UK': SPORTS_UK,
    'BINGO_UK': BINGO_UK,
    'POKER_UK': POKER_UK,
    'SPORTS_AU': SPORTS_AU,
    'SPORTS_FR': SPORTS_FR,
    'SPORTS_RO': SPORTS_RO
};

module.exports = {
    queries
};

