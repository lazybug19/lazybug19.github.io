import React from 'react';
import { title } from "@/components/primitives";

export const Footer: React.FC = () => {
    return (
        <footer>
            <div className="py-3 text-center justify-center bg-[url('/img/black.jpg')]">
                <h1 className="font-extralight py-1">Made with 💜</h1>
                <h1 className="text-xs text-slate-400 py-1 justify-center">&#169;Santrupti Behera</h1>
            </div>
        </footer>
    );
};