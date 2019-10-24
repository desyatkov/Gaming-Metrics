// Blackjack Mobile UK - 252, Casino Mobile UK - 130, Roulette Mobile UK - 254, Slots Mobile UK - 242, Blackjack UK - 248, Casino UK - 19, Roulette UK - 255, Slots UK - 244
const CASINO_UK = `
    SELECT 
        industry_name AS industry,
        'Casino UK' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(252, 130, 254, 242, 248, 19, 255, 244)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// Sports Betting UK - 52, Sports Betting Mobile UK - 116
const SPORTS_UK = `
    SELECT 
        industry_name AS industry,
        'Sports UK' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(52, 116)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// Bingo Mobile UK - 119, Bingo UK - 86
const BINGO_UK = `
    SELECT 
        industry_name AS industry,
        'Bingo UK' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(119, 86)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// Poker Mobile UK - 177, Poker UK - 21
const POKER_UK = `
    SELECT 
        industry_name AS industry,
        'Poker UK' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(177, 21)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// HorseRacing AU - 10052, HorseRacing Mobile AU - 10059, Sports Betting Mobile AU - 284, Sports Betting AU - 10028
const SPORTS_AU = `
    SELECT 
        industry_name AS industry,
        'Sports AU' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(10052, 10059, 284, 10028)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// Sports Betting FR - 91, Sports Betting Mobile FR - 215
const SPORTS_FR = `
    SELECT 
        industry_name AS industry,
        'Sports FR' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 20 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(91, 215)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
`;

// Sports Betting Mobile RO - 10091
const SPORTS_RO = `
    SELECT 
        industry_name AS industry,
        'Sports RO' AS vertical,
        'FID' AS metric,
        (bad_visits * 100 / (bad_visits + good_visits)) AS value
    FROM
        (
            SELECT 
                industry_name, 
                COUNT(DISTINCT fid_good.visit_iid) AS good_visits, 
                COUNT(DISTINCT fid_bad.visit_iid) AS bad_visits
            FROM 
                v_funnel_facts_analysts 
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 < 250 
                    GROUP BY 
                        1
                )
                AS fid_good 
            ON fid_good.visit_iid = v_funnel_facts_analysts.visit_iid
            LEFT JOIN
                (
                    SELECT 
                        visit_iid
                    FROM 
                        fact_ui_events
                    WHERE 
                        action = 'FID' 
                        AND LEN(value) < 6 
                        AND value * 1 > 250
                    GROUP BY 
                        1
                )
                AS fid_bad 
            ON fid_bad.visit_iid = v_funnel_facts_analysts.visit_iid
            WHERE 
                unified_date >= GETDATE() - 30
                AND site_id IN(10091)
            GROUP BY 
                1
        )
    WHERE 
        bad_visits + good_visits > 0 
        AND industry_name IS NOT NULL
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
