'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full text-[#00A582] text-center font-bold text-[16px] py-5 ${styled}`}>{children}</h3>
    )
}
