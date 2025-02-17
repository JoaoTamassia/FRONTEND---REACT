import React from "react";

export interface IIinput extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: React.ReactNode;
    name: string;
    control: any;
    errorMessage?: string;
}