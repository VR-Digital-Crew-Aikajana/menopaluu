import React from 'react'

import { TrainDetailedIcon, VRLogoIcon } from '../components/Icon'
import { TimelineMainBlock } from '../components/TimelineMainBlock'

export function Article() {
	return (
		<>
			<VRLogoIcon size={5} />
			<h1>Meno-paluu tulevaisuuteen</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus lobortis sem, ac fermentum leo tempor ut.</p>
			<button className="button green10Button" type="button">
				Nappula
			</button>
			<TimelineMainBlock
				id="eka-iso-juttu"
				icon={<TrainDetailedIcon />}
				image={<img alt="" src="/menopaluu/images/second-daily-pippin.jpg" height="499" width="888" />}
				header={
					<>
						<h2>Alussa oli juna, raide ja höyry</h2>
						<p>Praesent pharetra velit tellus, a pulvinar ligula faucibus in. Aliquam nec eros ultricies, ullamcorper dui sit amet, aliquet nibh. Nullam erat metus, mollis non ullamcorper nec, laoreet id lectus. </p>
					</>
				}
			>
				<h3>Mutta ei yhtään koodia :(</h3>
				<p>Quisque dictum erat sit amet diam dignissim varius sed id urna. Nunc varius eros odio, sed facilisis arcu pulvinar vel. Mauris semper odio ut metus feugiat, ut consequat eros rutrum.</p>
			</TimelineMainBlock>
			<TimelineMainBlock
				id="toka-iso-juttu"
				image={<div style={{ width: '20rem', height: '15rem', background: 'black' }} />}
				header={<h2>Toisenlaista testausta</h2>}
			>
				<h3>Alinomaista kontenttia</h3>
				<p>Niin maan paljon on sitä.</p>
			</TimelineMainBlock>
			<TimelineMainBlock
				id="demo-2003-tickets"
				image={<img alt="Kuva" src="/images/kuva.jpg" />}
				header={
					<>
						<h2>Lipunmyynnin suosio verkossa yllätti palvelimen</h2>
						<p>Uusi matkustajaliikenteen lipunmyyntijärjestelmä meni liveksi. Vain yhden palvelimen varassa pyörinyt palvelin hidastui, koska ihmiset innostuivat yli odotusten siitä, että junalippuja voikin ostaa nykyään netissä.</p>
					</>
				}
			 >
			 </TimelineMainBlock>
		</>
	)
}
