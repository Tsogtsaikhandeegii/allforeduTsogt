export default function ({ el }) {
    return (
        <Link
            href={
                el.object === "category"
                    ? generateLink(`/c/[slug]`)
                    : el.object === "post"
                        ? generateLink(`/d/[slug]`)
                        : el.object === "custom"
                            ? "/"
                            : el.object === "page"
                                ? generateLink(`/p/${el.slug}`)
                                : generateLink(el.slug)
            }
            as={
                el.object === "category"
                    ? generateLink(`/c/${el.slug}`)
                    : el.object === "post"
                        ? generateLink(`/d/${el.slug}`)
                        : el.object === "custom"
                            ? "/"
                            : el.object === "page"
                                ? generateLink(`/p/${el.slug}`)
                                : generateLink(el.slug)
            }
            passHref
        >
            <a rel="noopener noreferrer nofollow">{el.title}</a>
        </Link>

    )
}