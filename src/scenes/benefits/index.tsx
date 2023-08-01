import { BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description:  "Ceci est une description test de la première séquence des Benefits"
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description:  "Voici les différentes classes pour tous les différents Utilisateurs de l'application"
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Expert and Pro Trainers",
		description:  "Des Entraineurs Professionnels seront la pour vous encadrer et faire en sorte que vous puissiez atteindre vos objectifs"
	},
]

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

function Benefits({ setSelectedPage }: Props) {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/**HEADER */}
			<motion.div 
				className="md:m-5 md:w-3/5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
              <HText>MORE THAN JUST GYM.</HText>
				<p className="my-5 text-sm">
					We provide world class fitness equipment, trainers and classes to
					get you to your ultimate fitness goals with ease. We provide true
					care into each and every member.
				</p>
            </motion.div>
			{/**BENEFITS */}
			<motion.div 
				className="md:flex items-center justify-between gap-8 mt-5"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				variants={container}
			>
				{benefits.map((benefit: BenefitType) => (
					<Benefit
						key={benefit.title}
						icon={benefit.icon}
						title={benefit.title}
						description={benefit.description}
						setSelectedPage={setSelectedPage}
					/>
				))}
			</motion.div>

			{/**GRAPHICS AND DESCRIPTION */}
			<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
				{/**GRAPHIC */}
				<img
					className="mx-auto" 
					src={BenefitsPageGraphic}
					alt="benefits-apge-graphic" />
				{/**DESCRIPTION */}
				<div>
					{/**TITLE */}
					<div className="relative">
						<div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								transition={{ duration: 0.5 }}
								variants={{
									hidden: { opacity: 0, x: -50 },
									visible: { opacity: 1, x: 0 },
								}}
							>
								<HText>
									MILLIONS OF HAPPY MEMBERS GETTING{" "}
									<span className="text-primary-500">FIT</span>
								</HText>
							</motion.div>
						</div>
					</div>
					{/**DESCRIPT */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
					>
						<p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo nunc nec orci fringilla, non auctor lectus tincidunt. Phasellus accumsan massa a velit blandit, ac luctus urna feugiat. Etiam venenatis nunc vitae quam aliquam, ac mollis mi egestas. Nullam auctor eleifend velit, et tincidunt enim consequat eu. Sed consectetur elit a elementum eleifend. In fringilla risus nec nulla tempor interdum. Proin ut velit eget magna convallis aliquam eget id elit. Curabitur id elit vel eros luctus laoreet. Ut vestibulum nulla a sapien tincidunt, eu congue nisi consequat. Nulla sed erat sit amet nunc rutrum ultricies.</p>
						<p className="mb-5">Pellentesque ac libero lectus. Fusce nec odio eget neque mattis fringilla. Etiam facilisis lectus a bibendum luctus. Integer id tellus non magna venenatis fringilla eu quis felis. Sed sed aliquam velit. Vestibulum consectetur ipsum vel felis feugiat fermentum. Donec eu velit vitae nulla convallis venenatis.</p>
					</motion.div>

					{/**BUTTON */}
					<div className="relative mt-16">
						<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
							<ActionButton setSelectedPage={setSelectedPage}>
								Join Now
							</ActionButton>
						</div>
					</div>
				</div>
			</div>
        </motion.div>
    </section>
    )
}

export default Benefits;