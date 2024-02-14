/* eslint-disable no-nested-ternary */
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';

import { Preferences, Publication, PublicationNavbarItem, User } from '../generated/graphql';
import CommonHeaderIconBtn from './common-header-icon-btn';
import SearchSVG from './icons/svgs/SearchSvg';

const PublicationSearch = dynamic(() => import('./publication-search'), { ssr: false });

interface Props {
	publication: Pick<Publication, 'id' | 'title' | 'url' | 'isTeam' | 'favicon' | 'links'> & {
		author: Pick<User, 'id' | 'username' | 'name' | 'profilePicture'>;
	} & {
		preferences: Omit<Preferences, 'navbarItems'> & {
			navbarItems: Array<Omit<PublicationNavbarItem, 'series'>>;
		};
	};
}

const HeaderBlogSearch = (props: Props) => {
	const { publication } = props;

	const [isSearchUIVisible, toggleSearchUIState] = useState(false);
	const triggerRef = useRef<HTMLButtonElement>(null);

	const toggleSearchUI = () => {
		toggleSearchUIState(!isSearchUIVisible);
	};

	return (
		<>
			{isSearchUIVisible ? (
				<PublicationSearch
					publication={publication}
					toggleSearchUI={toggleSearchUI}
					triggerRef={triggerRef}
				/>
			) : null}
			<CommonHeaderIconBtn handleClick={toggleSearchUI} variant="search" btnRef={triggerRef}>
				<SearchSVG className="h-6 w-6 stroke-current opacity-70" />
			</CommonHeaderIconBtn>
		</>
	);
};

export default HeaderBlogSearch;
