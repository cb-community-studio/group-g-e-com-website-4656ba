import React from "react";
import { render, screen } from "@testing-library/react";

import ShippingorderCreateDialogComponent from "../ShippingorderCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shippingorder create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShippingorderCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shippingorder-create-dialog-component")).toBeInTheDocument();
});
