type PercentageParser<A extends string> 
    =A extends '' 
    ?['','','']
    :A extends `${infer F}${infer R}`
        ? F extends '+'|'-'
            ? R extends `${infer P}%`?[F,P ,'%']:[F,R,'']
            : A extends `${infer P}%`?['', P, '%']:['',A,'']
        :never