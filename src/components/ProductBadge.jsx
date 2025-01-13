const ProductBadge = ({ badgeText, className }) => {
    return (
        <div className={`${className} bg-[#D9D9D9] px-2 py-1 font-secondaryFont font-medium leading-4 text-sm text-[#010101] uppercase`}>
            <p>{badgeText}</p>
        </div>
    )
}

export default ProductBadge