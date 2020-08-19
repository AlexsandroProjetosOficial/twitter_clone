import React from 'react';
import {
	Container,
	SearchWrapper,
	SearchInput,
	SearchIcon,
	Body
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';
import StickyBox from 'react-sticky-box';

const Sidebar: React.FC = () => {
	return (
		<Container>
			<SearchWrapper>
				<SearchInput placeholder="Buscar no Twitter" />
				<SearchIcon />
			</SearchWrapper>
			<StickyBox>
				<Body>
					<List
						title="Talvez você curta."
						elements={[
							<FollowSuggestion name="Alexsandro Silva" nickname="@alexsandrosilva" />,
							<FollowSuggestion name="Leticia Pereira" nickname="@leticiapereira" />,
							<FollowSuggestion name="Maykon Pereira da Silva" nickname="@maykonpereiradasilva" />,
							<FollowSuggestion name="Lorena Pereira da Silva" nickname="@lerenapereiradasilva" />,
						]}
					/>
					<List
						title="Talvez você curta."
						elements={[
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
					<List
						title="Talvez você curta."
						elements={[
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
					<List
						title="Talvez você curta."
						elements={[
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
					<List
						title="Talvez você curta."
						elements={[
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
					<List
						title="Talvez você curta."
						elements={[
							<News />,
							<News />,
							<News />,
							<News />
						]}
					/>
				</Body>
			</StickyBox>
		</Container>
	);
}

export default Sidebar;