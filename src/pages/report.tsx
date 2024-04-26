import {
	Bar,
	Button,
	ButtonDomRef,
	DynamicPage,
	DynamicPageTitle,
	MessageStrip,
	Modals,
	Title,
} from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
import { useRef } from "react";
import ReportCreationForm from "../components/ReportCreationForm";
import AddReport from "../components/AddReport";

const Report = () => {
	const showDialog = Modals.useShowDialog();
	const closeReportBtnRef = useRef<ButtonDomRef>(null);
	return (
		<DynamicPage
			headerTitle={
				<DynamicPageTitle
					expandedContent={
						<MessageStrip>
							Information (You can see the Report Details here.)
						</MessageStrip>
					}
					header={<Title>Report</Title>}
					actions={
						<Button
							design="Emphasized"
							tooltip="Create"
							icon="create"
							onClick={() => {
								const { close } = showDialog({
									headerText: "Report Information",
									children: (
										<ReportCreationForm closeButtonref={closeReportBtnRef} />
									),
									footer: (
										<Bar
											endContent={
												<>
													<Button
														onClick={() => close()}
														design="Negative"
														ref={closeReportBtnRef}>
														Close
													</Button>
												</>
											}></Bar>
									),
								});
							}}>
							Create
						</Button>
					}
					snappedContent={
						<MessageStrip>
							Information (only visible if header content is collapsed/snapped)
						</MessageStrip>
					}></DynamicPageTitle>
			}
			style={{
				borderRadius: ThemingParameters.sapButton_BorderCornerRadius,
			}}
			showHideHeaderButton={false}
			headerContentPinnable={false}>
			<AddReport />
		</DynamicPage>
	);
};

export default Report;
