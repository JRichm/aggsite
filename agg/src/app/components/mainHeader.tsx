export default function MainHeader() {

    const linkStyle = "px-4 py-2 rounded-md hover:shadow-md transition-all hover:outline outline-gray-100 hover:outline-2 hover:bg-gray-100/50 hover:font-medium"

    return (
        <span className="flex flex-row justify-between p-5 color-white">
            <div>
                logo
            </div>
            <div>
                <div className="flex gap-2">
                    <a className={`${linkStyle}`} href="/">Home</a>
                    <a className={`${linkStyle}`} href="/about">About</a>
                    <a className={`${linkStyle}`} href="/collections">Collections</a>
                    <a className={`${linkStyle}`} href="/lookbook">Lookbook</a>
                    <a className={`${linkStyle}`} href="/shop">Shop</a>
                    <a className={`${linkStyle}`} href="/blog">Blog</a>
                    <a className={`${linkStyle}`} href="/contact">Contact</a>
                </div>
            </div>
        </span>
    )
}