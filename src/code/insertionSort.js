// src/code/insertionSort.js
export const javascript_code = `function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log("Sorted array:", insertionSort(arr));`;

export const java_code = `public class InsertionSort {
  void sort(int arr[]) {
    for (int i = 1; i < arr.length; i++) {
      int key = arr[i];
      int j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }

  static void printArray(int arr[]) {
    for (int num : arr)
      System.out.print(num + " ");
    System.out.println();
  }

  public static void main(String args[]) {
    int arr[] = {12, 11, 13, 5, 6};
    InsertionSort ob = new InsertionSort();
    ob.sort(arr);
    System.out.println("Sorted array:");
    printArray(arr);
  }
}`;

export const cpp_code = `#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
  for (int i = 1; i < n; i++) {
    int key = arr[i];
    int j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
}

int main() {
  int arr[] = {12, 11, 13, 5, 6};
  int n = sizeof(arr) / sizeof(arr[0]);
  insertionSort(arr, n);
  cout << "Sorted array: ";
  printArray(arr, n);
  return 0;
}`;
