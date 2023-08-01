import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Nulla sit amet mauris lorem. Cras euismod elit nec ligula tristique consequat. Mauris id quam a metus fermentum vehicula. Ut vitae elementum elit. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod mauris sed mi suscipit, non facilisis odio suscipit.",
        image: image1
    },
    {
        name: "Yoga Classes",
        image: image2
    },
    {
        name: "Ab Core Classes",
        description: "Nulla sit amet mauris lorem. Cras euismod elit nec ligula tristique consequat. Mauris id quam a metus fermentum vehicula. Ut vitae elementum elit. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod mauris sed mi suscipit, non facilisis odio suscipit.",
        image: image3
    },
    {
        name: "Adventure Classes",
        description: "Nulla sit amet mauris lorem. Cras euismod elit nec ligula tristique consequat. Mauris id quam a metus fermentum vehicula. Ut vitae elementum elit. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod mauris sed mi suscipit, non facilisis odio suscipit.",
        image: image4
    },
    {
        name: "Fitness Classes",
        image: image5
    },
    {
        name: "Training Classes",
        description: "Nulla sit amet mauris lorem. Cras euismod elit nec ligula tristique consequat. Mauris id quam a metus fermentum vehicula. Ut vitae elementum elit. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod mauris sed mi suscipit, non facilisis odio suscipit.",
        image: image6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                    Suspendisse potenti. Fusce bibendum pharetra leo, at finibus neque pharetra nec. Nulla et nunc volutpat, iaculis magna vel, vehicula purus. Fusce a purus at lectus volutpat egestas. Vivamus nec cursus odio. Sed auctor bibendum eleifend. Sed dapibus, velit eget cursus feugiat, ex dui porttitor odio, quis ultricies odio nulla ac quam. Donec venenatis quam quis scelerisque egestas. Cras id metus lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce venenatis ultrices neque, id egestas ligula maximus non. Proin ac mauris sed turpis interdum mattis. Duis nec ipsum id eros dignissim cursus.
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
};

export default OurClasses;