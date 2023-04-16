import Title from 'components/Title';
import { motion } from 'framer-motion';

export default function Subscription(): JSX.Element {
	return (
		<motion.div exit={{ y: -10, opacity: 0 }} className="mt-12 sm:m-2 sm:mt-12 md:m-10 lg:m-14 pb-6">
			<div className="flex flex-col items-center text-center gap-2">
				<Title>Coming Soon!</Title>
			</div>
		</motion.div>
	);
}
