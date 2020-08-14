import React from 'react';
import {
	Container,
	Banner,
	Avatar,
	ProfileData,
	LocartionIcon,
	CakeIcon,
	Followage,
	EditButton
} from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
	return (
		<Container>
			<Banner>
				<Avatar />
			</Banner>
			<ProfileData>
				<EditButton outlined>Editar Perfil</EditButton>
				<h1>Alexsandro Silva</h1>
				<h2>@AlexsandroSilva</h2>
				<p>
					Developer at <a href="https://www.aluminiobr.com.br">Aluminiobr</a>
				</p>
				<ul>
					<li>
						<LocartionIcon />
					  	Parana, Brasil
				  	</li>
					<li>
						<CakeIcon />
					  	Nascido(a) em 11 de Dezembro de 1988
				  	</li>
				</ul>
				<Followage>
					<span>
						Seguindo <strong>94</strong>
					</span>
					<span>
						<strong>672 </strong> seguidores
				  	</span>
				</Followage>
			</ProfileData>
			<Feed />
		</Container>
	);
}

export default ProfilePage;