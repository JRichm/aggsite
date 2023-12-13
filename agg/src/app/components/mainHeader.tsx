export default function MainHeader() {
    return (
        <span className="flex flex-row justify-between p-5 color-white">
            <div>
                logo
            </div>
            <div>
                <div className="flex gap-4">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/collections">Collections</a>
                    <a href="/lookbook">Lookbook</a>
                    <a href="/shop">Shop</a>
                    <a href="/blog">Blog</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </span>
    )
}