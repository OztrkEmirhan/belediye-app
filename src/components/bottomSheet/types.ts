export type BottomSheetProps = {
    backgroundColor: string;
    backDropColor: string;
    activeHeight: number;
};

export type BottomSheetRef = {
    collapse: () => void;
    expand: () => void;
};