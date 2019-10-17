// Blackjack Mobile UK, Casino Mobile UK, Roulette Mobile UK, Slots Mobile UK, Blackjack UK, Casino UK, Roulette UK, Slots UK
const CASINO_UK = `
    SELECT 
        last_week.industry_name, 
        'Casino UK' AS vertical,
        SUM(last_5_weeks.visits) AS last_5_weeks,
        SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(252, 130, 254, 242, 248, 19, 255, 244) 
                        AND country_name = 'United Kingdom'
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(252, 130, 254, 242, 248, 19, 255, 244) 
                        AND country_name = 'United Kingdom'
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
        last_week.industry_name, 
        'Sports UK' AS vertical, 
        SUM(last_5_weeks.visits) AS last_5_weeks,
        SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(52, 116) 
                        AND country_name = 'United Kingdom'
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(52, 116) 
                        AND country_name = 'United Kingdom'
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
        last_week.industry_name,  
        'Bingo UK' AS vertical,
        SUM(last_5_weeks.visits) AS last_5_weeks,
        SUM(last_week.visits) AS last_week      
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(119, 86) 
                        AND country_name = 'United Kingdom'
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(119, 86) 
                        AND country_name = 'United Kingdom'
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
        last_week.industry_name, 
        'Poker UK' AS vertical,
        SUM(last_5_weeks.visits) AS last_5_weeks,
        SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(177, 21) 
                        AND country_name = 'United Kingdom'
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(177, 21) 
                        AND country_name = 'United Kingdom'
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
        last_week.industry_name, 
        'Sports AU' AS vertical, 
        SUM(last_5_weeks.visits) AS last_5_weeks,
        SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(10052, 10059, 284, 10028) 
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(10052, 10059, 284, 10028)  
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
        last_week.industry_name, 
        'Sports FR' AS vertical, 
        SUM(last_5_weeks.visits) AS last_5_weeks,    
        SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(91, 215) 
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming' 
                        AND site_id IN(91, 215) 
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
         last_week.industry_name,
         'Sports RO' AS vertical,
         SUM(last_5_weeks.visits) AS last_5_weeks,
         SUM(last_week.visits) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(visits) AS visits                
            FROM
                (
                    SELECT 
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits                        
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2)
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id IN(10091) 
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
                SUM(visits) AS visits
            FROM
                (
                    SELECT
                        industry_name,
                        COUNT(DISTINCT visit_iid) AS visits
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        unified_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users'
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id IN(10091)  
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
