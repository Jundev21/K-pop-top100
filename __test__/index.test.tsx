import { render, screen } from "@testing-library/react";
import TestCompo from "../src/pages/index";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import getMelonData from "../src/crwaling/getMelonData";
import axios from "axios";

jest.mock("axios");

describe("is there hello ????", () => {
    const queryClient = new QueryClient();
    const melonData = useQuery(["melonData"], () => getMelonData());

    render(
        <QueryClientProvider client={queryClient}>
            {/* {melonData.data && melonData.data.map((el,idx)=>{

            mle

        })} */}
        </QueryClientProvider>
    );

    it("count melon Data", () => {
        if (melonData.data) {
            expect(melonData.data.length).toEqual(50);
        }
    });
});
