// Blackjack Mobile UK - 252, Casino Mobile UK - 130, Roulette Mobile UK - 254, Slots Mobile UK - 242, Blackjack UK - 248, Casino UK - 19, Roulette UK - 255, Slots UK - 244
const CASINO_UK = `
    SELECT 
        last_week.industry_name, 
        'Casino UK' AS vertical, 
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// Sports Betting UK - 52, Sports Betting Mobile UK - 116
const SPORTS_UK = `
    SELECT
        last_week.industry_name,
        'Sports UK' AS vertical, 
        sum(last_5_weeks.revenue) as last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT 
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT 
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// Bingo Mobile UK - 119, Bingo UK - 86
const BINGO_UK = `
    SELECT
        last_week.industry_name, 
        'Bingo UK' AS vertical, 
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week   
    FROM
        (
            SELECT 
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT 
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// Poker Mobile UK - 177, Poker UK - 21
const POKER_UK = `
    SELECT
        last_week.industry_name,
        'Poker UK' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week   
    FROM
        (
            SELECT
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// HorseRacing AU - 10052, HorseRacing Mobile AU - 10059, Sports Betting Mobile AU - 284, Sports Betting AU - 10028
const SPORTS_AU = `
    SELECT 
        last_week.industry_name,
        'Sports AU' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week   
    FROM
        (
            SELECT
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT 
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// Sports Betting FR - 91, Sports Betting Mobile FR - 215
const SPORTS_FR = `
    SELECT 
        last_week.industry_name,
        'Sports FR' AS vertical,
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week   
    FROM
        (
            SELECT 
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT 
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT 
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE 
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
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

// Sports Betting Mobile RO - 10091
const SPORTS_RO = `
    SELECT
        last_week.industry_name, 
        'Sports RO' AS vertical, 
        SUM(last_5_weeks.revenue) AS last_5_weeks,
        SUM(last_week.revenue) AS last_week
    FROM
        (
            SELECT 
                industry_name,
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 9) AND TRUNC(GETDATE() - 2) 
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
                SUM(revenue_factored) AS revenue
            FROM
                (
                    SELECT
                        industry_name,
                        SUM(revenue_factored) AS revenue_factored
                    FROM
                        v_funnel_facts_analysts
                    WHERE
                        conversion_date BETWEEN TRUNC(GETDATE() - 38) AND TRUNC(GETDATE() - 31) 
                        AND traffic_type = 'users' 
                        AND site_name IS NOT NULL
                        AND industry_name = 'Gaming'
                        AND site_id IN (10091)
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
