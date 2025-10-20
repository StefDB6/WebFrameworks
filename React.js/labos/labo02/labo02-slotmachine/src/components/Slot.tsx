

interface SlotProps {
    value: number
}

const Slot = (props: SlotProps) => {
    const images : string[] = [
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-cherry-cce8464b32439efb4f79fba017477125.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-lemon-52cd7112e8b6d398f97e69f8ce2da623.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-melon-593489676a762d464eaea97127970d28.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-prune-e486170eb7c22e6e9aed5de0316b5209.png",
      "https://similonap.github.io/webframeworks-cursus/assets/images/slot-seven-e71e0d10655b5491197925624b5ac139.png"
    ]
    
    return(
        <img src={images[props.value]} alt="" />  
    )
}

export default Slot