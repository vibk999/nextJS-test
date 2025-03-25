
import SearchShoe from "@/app/compoment/searchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";

import React, { } from "react";

const SearchPage = async ({ searchParams,
}: {
    searchParams: Promise<{ tenGiay: string }>;
}) => {
    const { tenGiay } = await searchParams;
    const listInitShoe = await getListProductByKeyWord(tenGiay);
    return (
        <SearchShoe initDataListShoe={listInitShoe} />
    )
}
export default SearchPage;
