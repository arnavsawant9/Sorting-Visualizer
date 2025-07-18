// src/code/shellSort.js
export const javascript_code = `function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) { 
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  return arr;
}

let arr = [12, 34, 54, 2, 3];
console.log("Sorted array:", shellSort(arr));`;

export const java_code = `public class ShellSort {
  void sort(int arr[]) {
    int n = arr.length;
    for (int gap = n / 2; gap > 0; gap /= 2) {
      for (int i = gap; i < n; i++) {
        int temp = arr[i];
        int j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }
        arr[j] = temp;
      }
    }
  }

  static void printArray(int arr[]) {
    for (int num : arr)
      System.out.print(num + " ");
    System.out.println();
  }

  public static void main(String args[]) {
    int arr[] = {12, 34, 54, 2, 3};
    ShellSort ob = new ShellSort();
    ob.sort(arr);
    System.out.println("Sorted array:");
    printArray(arr);
  }
}`;

export const cpp_code = `#include <iostream>
using namespace std;

void shellSort(int arr[], int n) {
  for (int gap = n / 2; gap > 0; gap /= 2) {
    for (int i = gap; i < n; i++) {
      int temp = arr[i];
      int j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
}

void printArray(int arr[], int n) {
  for (int i = 0; i < n; i++)
    cout << arr[i] << " ";
  cout << endl;
}

int main() {
  int arr[] = {12, 34, 54, 2, 3};
  int n = sizeof(arr) / sizeof(arr[0]);
  shellSort(arr, n);
  cout << "Sorted array: ";
  printArray(arr, n);
  return 0;
}`;
