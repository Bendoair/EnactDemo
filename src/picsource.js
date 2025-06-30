const  getPictureUrl = ({id}) => {
    return `//picsum.photos/id/${10+id}`;
}

const getPictureUrlHW = ({id, width, height}) =>{
    return `//picsum.photos/id/${10+id}/${width}/${height}`;
}

export { getPictureUrl,getPictureUrlHW };