import React from "react";

import grid1 from "../../assets/grid-1.jpg";
import grid2 from "../../assets/grid-2.jpg";
import grid3 from "../../assets/grid-3.jpg";
import grid4 from "../../assets/grid-4.jpg";
import grid5 from "../../assets/grid-5.jpg";
import bannarImg from "../../assets/dsc-8584@2x.webp";

const Featured = () => {
	return (
		<div>
			<div className="my-20 text-center space-y-4 ">
				<h1 className="text-5xl font-bold font-courgette text-pink">OUR WEDDING FEATURED</h1>
				<p className="text-2xl">weddin Portfolio</p>
				<div className="w-60 bg-pink h-1 mx-auto">
				</div>
			</div>

			<div className=" flex gap-5">
				<div className="grid grid-cols-2 gap-5">
					<img
						className="col-span-2 w-full h-full"
						src={grid1}
						alt=""
					/>

					<img
						className="w-full h-full object-cover"
						src={grid2}
						alt=""
					/>
					<img
						className="w-full h-full object-cover"
						src={grid4}
						alt=""
					/>
				</div>
				<div className="grid grid-cols-2 gap-5 ">
					<div className="row-span-2">
					<img
						className=" h-full w-full   object-cover "
						src={bannarImg}
						alt=""
					/>
					</div>
					<img
						className="w-full h-full object-cover"
						src={grid3}
						alt=""
					/>
					<img
						className="w-full h-full  object-cover"
						src={grid5}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Featured;
