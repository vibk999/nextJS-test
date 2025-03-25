
import SearchShoe from "@/app/compoment/searchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";
import { IShoeType } from "@/app/types/shoe";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import _ from "lodash"
const SearchPage = async ({ searchParams }) => {
    const { tenGiay } = searchParams;
    const listInitShoe = await getListProductByKeyWord();
    return (
        <SearchShoe initDataListShoe={listInitShoe} />
    )
}
export default SearchPage;
