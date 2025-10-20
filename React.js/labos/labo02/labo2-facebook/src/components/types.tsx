interface PostType {
    profile: ProfileType
    caption: CaptionType
    article: ArticleType
    footer: FooterType
}

interface ProfileType {
    pfp: string
    un: string
    bio: string
}

interface CaptionType {
    text: string
}

interface ArticleType {
    img: string
    title: string
    subtitle: string
    link: string
}

interface FooterType {
    like: string
    comment: string
    share: string
}



export type {PostType, ProfileType, CaptionType, ArticleType, FooterType }