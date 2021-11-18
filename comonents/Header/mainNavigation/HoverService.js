import Image from "next/image"
import Link from "next/link"
import style from "../../../styles/components/header/main_header.module.css";
import { imageEditingData, photoRetouchingData, imgPostProductionData} from './HoverServiceData';
import { useEffect, useState } from 'react';

function HoverService() {

    const [selectedService, setSelectedService] = useState("Image Editing")
    const [selectedServiceList, setSelectedServiceList] = useState(imageEditingData)

    useEffect(() => {
        const imgEditing = document.getElementById("img_editing")
        const hoverFunc = () => {
            // console.log(imgEditing.innerText)
            setSelectedService(imgEditing.innerText)
            setSelectedServiceList(imageEditingData)
        }
        imgEditing.addEventListener("mouseover", hoverFunc)
        return() => {
            removeEventListener("mouseover", hoverFunc)
        }
    }, [setSelectedService])

    useEffect(() => {
        const photoRetouching = document.getElementById("photo_retouching")
        const hoverFunc = () => {
            // console.log(imgEditing.innerText)
            setSelectedService(photoRetouching.innerText)
            setSelectedServiceList(photoRetouchingData)
        }
        photoRetouching.addEventListener("mouseover", hoverFunc)
        return() => {
            removeEventListener("mouseover", hoverFunc)
        }
    }, [setSelectedService])
    useEffect(() => {
        const imgPostProduction = document.getElementById("img_post_production")
        const hoverFunc = () => {
            // console.log(imgEditing.innerText)
            setSelectedService(imgPostProduction.innerText)
            setSelectedServiceList(imgPostProductionData)
        }
        imgPostProduction.addEventListener("mouseover", hoverFunc)
        return() => {
            removeEventListener("mouseover", hoverFunc)
        }
    }, [setSelectedService])


    return (
        <section className={style.service_container}>
        <div className="row">
          <article className="col-sm-3 ps-1 p-0">
            <div className={`${style.service_name} ${selectedService === "Image Editing" && style.service_active}`} id="img_editing">Image Editing</div>
            <div
              className={`${style.service_name} ${selectedService === "Photo Retouching" && style.service_active}`} id="photo_retouching"
            >
              Photo Retouching
            </div>
            <div className={`${style.service_name} ${selectedService === "Image Post-Production" && style.service_active}`} id="img_post_production">
              Image Post-Production
            </div>
          </article>
          <article className="col-sm-9 p-0">
            <div className={style.service_image_container}>
                {
                    selectedServiceList?.slice(0,8).map((data,index) => <div key={index} className={style.service_image}>
                    <Link href="/">
                    <a>
                    <div className="next_image_container">
                      <Image
                        src={data.imgSrc}
                        alt={data.text}
                        layout="fill"
                        className="next_image"
                      />
                    </div>
                    <p className="mb-0">{data.text}</p>
                    </a>
                    </Link>
                  </div>)
                }            
            </div> 
          </article>
        </div>
      </section>
    )
}

export default HoverService
