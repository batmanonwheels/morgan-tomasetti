import { cn } from "@/lib/utils";

export const MainContainer = ({
	children,
	isScrollable = false,
	className = "",
}: Readonly<{
	children: React.ReactNode;
	isScrollable?: boolean;
	className?: string;
}>) => {
	const scroll = isScrollable ? "overflow-y-scroll" : "";
	return (
		<main
			className={cn(
				`flex max-h-6/7 basis-6/7 flex-col gap-4 p-2 md:max-h-7/8 md:basis-7/8 md:flex-row md:p-4`,
				scroll,
				className,
			)}
		>
			{children}
		</main>
	);
};
