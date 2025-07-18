// src/code/selectionSort.js
export const javascript_code = `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(arr));`;

export const java_code = `public class SelectionSort {
  void sort(int arr[]) {
    int n = arr.length;

    for (int i = 0; i < n - 1; i++) {
      int minIdx = i;
      for (int j = i + 1; j < n; j++)
        if (arr[j] < arr[minIdx])
          minIdx = j;

      int temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }

  static void printArray(int arr[]) {
    for (int num : arr)
      System.out.print(num + " ");
    System.out.println();
  }

  public static void main(String args[]) {
    int arr[] = {64, 25, 12, 22, 11};
    SelectionSort ob = new SelectionSort();
    ob.sort(arr);
    System.out.println("Sorted array:");
    printArray(arr);
  }
}`;

export const cpp_code = `#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
  for (int i = 0; i < n - 1; i++) {
    int minIdx = i;
    for (int j = i + 1; j < n; j++)
      if (arr[j] < arr[minIdx])
        minIdx = j;

    int temp = arr[minIdx];
    arr[minIdx] = arr[i];
    arr[i] = temp;
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
}

int main() {
  int arr[] = {64, 25, 12, 22, 11};
  int n = sizeof(arr) / sizeof(arr[0]);
  selectionSort(arr, n);
  cout << "Sorted array: ";
  printArray(arr, n);
  return 0;
}`;
