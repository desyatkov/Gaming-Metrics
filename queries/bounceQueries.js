//Casino UK Vertical  (Casino ,Slots , BlackJack , Roulette)
const CASINO_UK = `
    SELECT
        last_week.industry_name AS industry,
        'Casino UK' as vertical,
        'BR' AS metric,
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select 
                industry_name, 
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float) / cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) AS bounced,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from 
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN  (252 ,130 ,254 ,242,248 ,19 ,255 ,244) and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        )
        as last_week
    INNER JOIN
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) bounced ,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN  (252 ,130 ,254 ,242,248 ,19 ,255 ,244)   and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        )
        as last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name 
    group by
        1, 2
`;

// Sports Betting UK, Sports Betting Mobile UK
const SPORTS_UK = `
    SELECT
        last_week.industry_name AS industry,
        'Sports UK' as vertical,
        'BR' AS metric,
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) bounced,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN  (52 ,116) and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        )
        as last_week
    INNER JOIN
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) bounced,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN  (52 ,116)   and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        ) 
        as last_5_weeks
    ON last_5_weeks.industry_name=last_week.industry_name 
    group by
        1, 2
`;

// Bingo Mobile UK, Bingo UK
const BINGO_UK = `
    SELECT
        last_week.industry_name AS industry,
        'Bingo UK' as vertical,
        'BR' AS metric,
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        count(distinct bounced_visit_iid) bounced,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                         unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                          and industry_name = 'Gaming' and site_id IN (119,86) and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        )
        as last_week
    INNER JOIN
        (
            select 
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select 
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count(distinct bounced_visit_iid) bounced,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (119,86)   and country_name = 'United Kingdom'
                    group by 
                        1
                )
            group by 
                1
        ) 
        as last_5_weeks
    ON last_5_weeks.industry_name = last_week.industry_name 
    group by 
        1, 2
`;

// Poker Mobile UK, Poker UK
const POKER_UK = `
    SELECT 
        last_week.industry_name AS industry, 
        'Poker UK'  as vertical,
        'BR' AS metric, 
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select 
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select 
                        industry_name,
                        count (distinct visit_iid) as visits, 
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        count(distinct bounced_visit_iid) bounced,
                        sum(revenue_factored) as revenue_factored
                    from 
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (177,21) and country_name = 'United Kingdom'
                    group by 
                        1
                )
            group by 
                1
        ) 
        as last_week
    INNER JOIN
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select 
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count(distinct bounced_visit_iid) bounced,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (177,21)   and country_name = 'United Kingdom'
                    group by
                        1
                )
            group by
                1
        )
        as last_5_weeks
    ON last_5_weeks.industry_name=last_week.industry_name 
    group by
        1, 2
`;

// HorseRacing Mobile AU, HorseRacing AU, Sports Betting Mobile AU, Sports Betting AU
const SPORTS_AU = `
    SELECT
        last_week.industry_name AS industry,
        'Sports AU' as vertical,
        'BR' AS metric, 
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        count(distinct bounced_visit_iid) bounced,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (10052,10059,284,10028) 
                    group by
                        1
                )
            group by 
                1
        ) 
        as last_week
    INNER JOIN
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        count(distinct bounced_visit_iid) bounced,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (10052,10059,284,10028)  
                    group by
                        1
                )
            group by
                1
        )
        as last_5_weeks
    ON last_5_weeks.industry_name=last_week.industry_name 
    group by
        1, 2
`;

// Sports Betting FR, Sports Betting Mobile FR
const SPORTS_FR = `
    SELECT
        last_week.industry_name AS industry, 
        'Sports FR' as vertical ,
        'BR' AS metric, 
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) bounced,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (91,215) 
                    group by
                        1
                )
            group by
                1
        )
        as last_week
    INNER JOIN
        (
            select 
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count(distinct bounced_visit_iid) bounced ,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (91,215) 
                    group by
                        1
                )
            group by
                1
        )
        as last_5_weeks
    ON last_5_weeks.industry_name=last_week.industry_name 
    group by
        1, 2
`;

// Sports Betting Mobile RO
const SPORTS_RO = `
    SELECT 
        last_week.industry_name AS industry,
        'Sports RO' as vertical,
        'BR' AS metric, 
        sum(last_5_weeks.BR) as last_5_weeks,
        sum(last_week.BR) as value
    FROM
        (
            select
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count (distinct visit_iid_product) as clickouts,
                        count(distinct bounced_visit_iid) bounced,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date BETWEEN trunc(getdate()-9) and trunc(getdate()-2) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (10091) 
                    group by
                        1
                )
            group by
                1
        )
        as last_week
    INNER JOIN
        (
            select 
                industry_name,
                sum(visits) as visits,
                sum(revenue_factored) as revenue,
                cast(cast(sum(bounced) as float)/cast(sum(visits) as float) as float) as BR
            from
                (
                    select 
                        industry_name,
                        count (distinct visit_iid) as visits,
                        count(distinct bounced_visit_iid) bounced,
                        count (distinct visit_iid_product) as clickouts,
                        sum(commission) as commission,
                        sum(revenue_factored) as revenue_factored
                    from
                        v_funnel_facts_analysts
                    where
                        unified_date between trunc(getdate()-38) AND trunc(getdate()-31) and traffic_type = 'users' and site_name is not null
                        and industry_name = 'Gaming' and site_id IN (10091)  
                    group by 
                        1
                )
            group by
                1
        )
        as last_5_weeks
    ON last_5_weeks.industry_name=last_week.industry_name 
    group by
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

