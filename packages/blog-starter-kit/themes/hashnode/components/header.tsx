import { useAppContext } from './contexts/appContext';
import PublicationNavLinks from './publication-nav-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header className="blog-header relative sticky top-0 z-50 w-full border-b border-black/10 bg-white bg-opacity-70 backdrop-blur dark:border-white/10 dark:bg-slate-900 dark:bg-opacity-70">
			<div className="container mx-auto px-2 md:px-4 2xl:px-10">
				<div
					className="relative  flex-row items-center justify-center overflow-hidden text-base md:flex"
					data-tom="hidden md:flex relative flex-row items-center justify-center overflow-hidden text-base mt-8"
				>
					<PublicationNavLinks
						isHome={isHome}
						currentActiveMenuItemId={currentMenuId}
						enabledPages={publication.preferences?.enabledPages}
						navbarItems={publication.preferences?.navbarItems || []}
					/>
				</div>
			</div>
		</header>
	);
};
