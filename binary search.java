public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (arr[mid] == target)
                return mid; // Target found
            else if (arr[mid] < target)
                low = mid + 1; // Right half
            else
                high = mid - 1; // Left half
        }

        return -1; // Target not found
    }

    public static void main(String[] args) {
        int[] numbers = {2, 4, 10, 18, 25, 33, 47}; // Must be sorted
        int target = 18;

        int result = binarySearch(numbers, target);

        if (result != -1)
            System.out.println("Element found at index: " + result);
        else
            System.out.println("Element not found");
    }
}

