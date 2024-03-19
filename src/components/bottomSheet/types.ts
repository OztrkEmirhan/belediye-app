export type BottomSheetProps = {
    backgroundColor: string;
    backDropColor: string;
    activeHeight: number;
};

export type BottomSheetRef = {
    expand: () => void;
    close: () => void;
};