export const Card = ({
    title,
    description,
    price,
    background,
    promoText,
    onClick,
}) => (
    <div className="sticky top-0 left-0 flex flex-col justify-end flex-shrink-0 lg:w-[calc(100%/5-(1rem*4/5))] p-[30px] min-h-[360px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
        <p>{title}</p>
        <ul>
            {description?.map((text) => (
                <li>{text}</li>
            ))}
        </ul>
        <div>
            <p>From</p>
            <p>{price}</p>
        </div>
        <button {...{ onClick }} />
    </div>
);
