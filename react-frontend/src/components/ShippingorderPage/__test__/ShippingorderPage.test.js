import React from "react";
import { render, screen } from "@testing-library/react";

import ShippingorderPage from "../ShippingorderPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shippingorder page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShippingorderPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shippingorder-datatable")).toBeInTheDocument();
    expect(screen.getByRole("shippingorder-add-button")).toBeInTheDocument();
});
