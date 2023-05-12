import React from "react";
import { render, screen } from "@testing-library/react";

import ShippingorderEditDialogComponent from "../ShippingorderEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shippingorder edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShippingorderEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shippingorder-edit-dialog-component")).toBeInTheDocument();
});
