TRUNCATE TABLE lessons, saves, users RESTART IDENTITY CASCADE;

INSERT INTO lessons(name, text, solution, p_in, p_test, j_in, j_test, p_in_lock, p_test_lock, j_in_lock, j_test_lock)
VALUES ('Sandbox',
        'You are free to play around in this lesson.',
        '',
        '',
        'import unittest' || E'\n' || E'\n' ||
        'class Test(unittest.TestCase):' || E'\n' ||
        '  def test_good(self):' || E'\n' ||
        '    ...' || E'\n' || E'\n' ||
        'if __name__ == ''__main__'':' || E'\n' ||
        '  unittest.main()' || E'\n',
        'public class Main {' || E'\n' ||
        '  public static void main(String[] args) { }' || E'\n' ||
        '}' || E'\n',
        'import static org.junit.Assert.*;' || E'\n' || E'\n' ||
        'public class Test {' || E'\n' ||
        '  @org.junit.Test' || E'\n' ||
        '  public void testIt() { }' || E'\n' ||
        '}' || E'\n',
        FALSE, FALSE, FALSE, FALSE),
       ('First Lesson - Division',
        'Since <b>Python</b> is dynamically typed, it is easy to get whole number division or floating point division. It simply uses two different operators to do the job. Single slash returns floating point number, while double slash returns a whole number. <br/> <br/>' ||
        '<b>Java</b> has static typing. Since both of our input numbers are integers, returning their division as a whole number is simple. It gets a bit more complicated when you want floating point output. You first need to convert the input numbers to type double. <br/> <br/>' ||
        'Fill in the two <b>Java</b> functions to complete this lesson.',
        '(double) first / (double) second',
        'def divide_int(first, second):' || E'\n' ||
        '  return first // second' || E'\n' || E'\n' ||
        'def divide_float(first, second):' || E'\n' ||
        '  return first / second' || E'\n' || E'\n',
        'import unittest' || E'\n' ||
        'import main' || E'\n' || E'\n' ||
        'class Test(unittest.TestCase):' || E'\n' ||
        '  def test_divide_int(self):' || E'\n' ||
        '    self.assertEqual(2, main.divide_int(5, 2))' || E'\n' ||
        '  def test_divide_float(self):' || E'\n' ||
        '    self.assertEqual(2.5, main.divide_float(5, 2))' || E'\n' || E'\n' ||
        'if __name__ == ''__main__'':' || E'\n' ||
        '  unittest.main()' || E'\n',
        'public class Main {' || E'\n' ||
        '  public static int divideInt(int first, int second) {' || E'\n' ||
        '    return 0;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public static double divideFloat(int first, int second) {' || E'\n' ||
        '    return 0;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public static void main(String[] args) { }' || E'\n' ||
        '}' || E'\n',
        'import static org.junit.Assert.*;' || E'\n' || E'\n' ||
        'public class Test {' || E'\n' ||
        '  @org.junit.Test' || E'\n' ||
        '  public void testDivideInt() {' || E'\n' ||
        '    assertEquals(2, Main.divideInt(5, 2));' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  @org.junit.Test' || E'\n' ||
        '  public void testDivideFloat() {' || E'\n' ||
        '    assertEquals(2.5, Main.divideFloat(5, 2), 0.0001);' || E'\n' ||
        '  }' || E'\n' ||
        '}' || E'\n',
        TRUE, TRUE, FALSE, FALSE),
       ('Second Lesson - Python List Comprehension',
        '<b><i>From Python documentation:</i></b> <br/>' ||
        '"List comprehensions provide a concise way to create lists. A list comprehension consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. List comprehensions can contain complex expressions and nested functions." <br/> <br/>' ||
        'In this lesson, create a <b>Python</b> list comprehension of the provided <b>Java</b> code.',
        '[number <b>for</b> number <b>in</b> input_list <b>if</b> number < 10 <b>if</b> number > 0]',
        'def list_comprehension(input_list):' || E'\n' ||
        '  return []' || E'\n',
        'import unittest' || E'\n' ||
        'import main' || E'\n' || E'\n' ||
        'class Test(unittest.TestCase):' || E'\n' ||
        '  def test_list_comprehension(self):' || E'\n' ||
        '    self.assertEqual([5, 9, 1, 3], main.list_comprehension([-1, 5, 9, 12, 10, 0, 1, 3]))' || E'\n' || E'\n' ||
        'if __name__ == ''__main__'':' || E'\n' ||
        '  unittest.main()' || E'\n',
        'import java.util.ArrayList;' || E'\n' ||
        'import java.util.List;' || E'\n' || E'\n' ||
        'public class Main {' || E'\n' ||
        '  public static List<Integer> listComprehension(List<Integer> inputList) {' || E'\n' ||
        '    List<Integer> outputList = new ArrayList<>();' || E'\n' ||
        '    for (Integer number : inputList) {' || E'\n' ||
        '      if (number < 10 && number > 0) {' || E'\n' ||
        '        outputList.add(number);' || E'\n' ||
        '      }' || E'\n' ||
        '    }' || E'\n' ||
        '    return outputList;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public static void main(String[] args) { }' || E'\n' ||
        '}' || E'\n',
        'import java.util.Arrays;' || E'\n' ||
        'import static org.junit.Assert.*;' || E'\n' || E'\n' ||
        'public class Test {' || E'\n' ||
        '  @org.junit.Test' || E'\n' ||
        '  public void testListComprehension() {' || E'\n' ||
        '    assertEquals(Arrays.asList(5, 9, 1, 3), Main.listComprehension(Arrays.asList(-1, 5, 9, 12, 10, 0, 1, 3)));' ||
        E'\n' ||
        '  }' || E'\n' ||
        '}' || E'\n',
        FALSE, FALSE, TRUE, TRUE),
       ('Third Lesson - Tower of Hanoi Validator',
        'If you are not familiar with Tower of Hanoi, it is a mathematical puzzle consisting of disks in increasing sizes and 3 rods. The objective of the puzzle is to move the entire stack of disks from the first rod to the last rod obeying 3 simple rules: <br/><br/> 1. Only one disk may be moved at a time. <br/> 2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or an empty rod. <br/> 3. No disk may be placed on top of a disk that is smaller than it. </br> <br/>' ||
        'Fill in needed <b>Java</b> code to pass all the tests.',
        'import java.util.ArrayList;<br/>import java.util.HashSet;<br/>import java.util.List;<br/>import java.util.Set;<br/><br/>public class Main {<br/>&nbsp;&nbsp;private final Integer numberOfDisks;<br/>&nbsp;&nbsp;private List&lt;Integer&gt; rod1 = new ArrayList<>();<br/>&nbsp;&nbsp;private List&lt;Integer&gt; rod2 = new ArrayList<>();<br/>&nbsp;&nbsp;private List&lt;Integer&gt; rod3 = new ArrayList<>();<br/><br/>&nbsp;&nbsp;public Main(Integer numberOfDisks) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (numberOfDisks == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.numberOfDisks = 0;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.numberOfDisks = numberOfDisks;<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i <= numberOfDisks; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rod1.add(i);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public Main(Integer numberOfDisks, List&lt;Integer&gt; rod1, List&lt;Integer&gt; rod2, List&lt;Integer&gt; rod3) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.numberOfDisks = numberOfDisks;<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.rod1 = rod1;<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.rod2 = rod2;<br/>&nbsp;&nbsp;&nbsp;&nbsp;this.rod3 = rod3;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public static void main(String[] args) { }<br/><br/>&nbsp;&nbsp;boolean checkValidity() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (numberOfDisks == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;Set&lt;Integer&gt; disks = new HashSet<>();<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i <= numberOfDisks; i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disks.add(i);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (isRodWrong(rod1) || isRodWrong(rod2) || isRodWrong(rod3)) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;disks = removeDisksFromSet(disks, rod1);<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (disks == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;disks = removeDisksFromSet(disks, rod2);<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (disks == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;disks = removeDisksFromSet(disks, rod3);<br/>&nbsp;&nbsp;&nbsp;&nbsp;return disks != null && disks.isEmpty();<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;boolean isRodWrong(List&lt;Integer&gt; rod) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (rod == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (rod.isEmpty()) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;Integer current = rod.get(0);<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (int i = 1; i < rod.size(); i++) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (rod.get(i) < current) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return true;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;current = rod.get(i);<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return false;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;Set&lt;Integer&gt; removeDisksFromSet(Set&lt;Integer&gt; disks, List&lt;Integer&gt; rod) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;if (disks == null || rod == null) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return disks;<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;for (Integer disk : rod) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (disks.contains(disk)) {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disks.remove(disk);<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} else {<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return null;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;return disks;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public Integer getNumberOfDisks() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return numberOfDisks;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public List&lt;Integer&gt; getRod1() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return rod1;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public List&lt;Integer&gt; getRod2() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return rod2;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;public List&lt;Integer&gt; getRod3() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return rod3;<br/>&nbsp;&nbsp;}<br/><br/>&nbsp;&nbsp;@Override<br/>&nbsp;&nbsp;public String toString() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;return "Main{" +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"numberOfDisks=" + numberOfDisks +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", rod1=" + rod1 +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", rod2=" + rod2 +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", rod3=" + rod3 +<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}";<br/>&nbsp;&nbsp;}<br/>}<br/>',
        'class Tower:' || E'\n' ||
        '  def __init__(self, number_of_disks, rod1=[], rod2=[], rod3=[]):' || E'\n' ||
        '    self.number_of_disks = number_of_disks' || E'\n' ||
        '    self.rod1 = rod1' || E'\n' ||
        '    self.rod2 = rod2' || E'\n' ||
        '    self.rod3 = rod3' || E'\n' ||
        '    if rod1 is None or rod2 is None or rod3 is None:' || E'\n' ||
        '      return' || E'\n' ||
        '    if len(rod1) == 0 and len(rod2) == 0 and len(rod3) == 0:' || E'\n' ||
        '      if number_of_disks is None:' || E'\n' ||
        '        self.number_of_disks = 0' || E'\n' ||
        '      else:' || E'\n' ||
        '        rod1 = [i for i in range(1, number_of_disks + 1)]' || E'\n' ||
        '    self.rod1 = rod1' || E'\n' ||
        '    self.rod2 = rod2' || E'\n' ||
        '    self.rod3 = rod3' || E'\n' || E'\n' ||
        'def check_validity(tower):' || E'\n' ||
        '  if tower.number_of_disks is None:' || E'\n' ||
        '    return False' || E'\n' ||
        '  disks = [i for i in range(1, tower.number_of_disks + 1)]' || E'\n' ||
        '  if is_rod_wrong(tower.rod1) or is_rod_wrong(tower.rod2) or is_rod_wrong(tower.rod3):' || E'\n' ||
        '    return False' || E'\n' ||
        '  disks = remove_disks_from_set(disks, tower.rod1)' || E'\n' ||
        '  if disks is None:' || E'\n' ||
        '    return False' || E'\n' ||
        '  disks = remove_disks_from_set(disks, tower.rod2)' || E'\n' ||
        '  if disks is None:' || E'\n' ||
        '    return False' || E'\n' ||
        '  disks = remove_disks_from_set(disks, tower.rod3)' || E'\n' ||
        '  if disks is None or len(disks) != 0:' || E'\n' ||
        '    return False' || E'\n' ||
        '  return True' || E'\n' || E'\n' ||
        'def is_rod_wrong(rod):' || E'\n' ||
        '  if rod is None:' || E'\n' ||
        '    return True' || E'\n' ||
        '  if len(rod) == 0:' || E'\n' ||
        '    return False' || E'\n' ||
        '  current = rod[0]' || E'\n' ||
        '  for i in range(1, len(rod)):' || E'\n' ||
        '    if rod[i] < current:' || E'\n' ||
        '      return True' || E'\n' ||
        '    current = rod[i]' || E'\n' ||
        '  return False' || E'\n' || E'\n' ||
        'def remove_disks_from_set(disks, rod):' || E'\n' ||
        '  if disks is None or rod is None:' || E'\n' ||
        '    return disks' || E'\n' ||
        '  for disk in rod:' || E'\n' ||
        '    if disk in disks:' || E'\n' ||
        '      disks.remove(disk)' || E'\n' ||
        '    else:' || E'\n' ||
        '      return None' || E'\n' ||
        '  return disks' || E'\n',
        'import unittest' || E'\n' ||
        'import main' || E'\n' || E'\n' ||
        'class Test(unittest.TestCase):' || E'\n' ||
        '  def test_simple_constructor(self):' || E'\n' ||
        '    tower = main.Tower(7)' || E'\n' ||
        '    self.assertEqual(7, tower.number_of_disks)' || E'\n' ||
        '    self.assertEqual([1, 2, 3, 4, 5, 6, 7], tower.rod1)' || E'\n' ||
        '    self.assertEqual([], tower.rod2)' || E'\n' ||
        '    self.assertEqual([], tower.rod3)' || E'\n' ||
        '    tower = main.Tower(0)' || E'\n' ||
        '    self.assertEqual(0, tower.number_of_disks)' || E'\n' ||
        '    self.assertEqual([], tower.rod1)' || E'\n' ||
        '    tower = main.Tower(None)' || E'\n' ||
        '    self.assertEqual(0, tower.number_of_disks)' || E'\n' ||
        '    self.assertEqual([], tower.rod1)' || E'\n' || E'\n' ||
        '  def test_complex_constructor(self):' || E'\n' ||
        '    tower = main.Tower(6, [1, 2, 3], [4, 6], [5])' || E'\n' ||
        '    self.assertEqual(6, tower.number_of_disks)' || E'\n' ||
        '    self.assertEqual([1, 2, 3], tower.rod1)' || E'\n' ||
        '    self.assertEqual([4, 6], tower.rod2)' || E'\n' ||
        '    self.assertEqual([5], tower.rod3)' || E'\n' ||
        '    tower = main.Tower(None, None, None, None)' || E'\n' ||
        '    self.assertEqual(None, tower.number_of_disks)' || E'\n' ||
        '    self.assertEqual(None, tower.rod1)' || E'\n' ||
        '    self.assertEqual(None, tower.rod2)' || E'\n' ||
        '    self.assertEqual(None, tower.rod3)' || E'\n' || E'\n' ||
        '  def test_remove_disks(self):' || E'\n' ||
        '    self.assertEqual(None, main.remove_disks_from_set(None, [1, 2]))' || E'\n' ||
        '    self.assertEqual({1, 2}, main.remove_disks_from_set({1, 2}, None))' || E'\n' ||
        '    self.assertEqual(None, main.remove_disks_from_set(None, None))' || E'\n' ||
        '    self.assertEqual({2, 5}, main.remove_disks_from_set({1, 2, 3, 4, 5}, [1, 3, 4]))' || E'\n' ||
        '    self.assertEqual({2, 5}, main.remove_disks_from_set({2, 5}, []))' || E'\n' ||
        '    self.assertEqual(set(), main.remove_disks_from_set({2, 5}, [2, 5]))' || E'\n' ||
        '    self.assertEqual(None, main.remove_disks_from_set(set(), [1, 3, 4]))' || E'\n' || E'\n' ||
        '  def test_wrong_rod(self):' || E'\n' ||
        '    self.assertEqual(False, main.is_rod_wrong([2, 4]))' || E'\n' ||
        '    self.assertEqual(False, main.is_rod_wrong([]))' || E'\n' ||
        '    self.assertEqual(True, main.is_rod_wrong([1, 2, 5, 4]))' || E'\n' ||
        '    self.assertEqual(True, main.is_rod_wrong(None))' || E'\n' || E'\n' ||
        '  def test_check_validity(self):' || E'\n' ||
        '    tower = main.Tower(0)' || E'\n' ||
        '    self.assertEqual(True, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(2)' || E'\n' ||
        '    self.assertEqual(True, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(5, [], [3, 4, 5], [1, 2])' || E'\n' ||
        '    self.assertEqual(True, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(3, [], [], [1, 3, 2])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(1, [], [], [])' || E'\n' ||
        '    tower.rod1 = []' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(2, [], [1], [])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(8, [1, 2, 3], [4, 5, 6], [7, 9])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(3, [0, 1], [2], [])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(None, [], [], [])' || E'\n' ||
        '    tower.number_of_disks = None' || E'\n' ||
        '    tower.rod1 = []' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(3, None, [], [1, 2, 3])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(3, [1, 2, 3], None, [])' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(3, [1, 2], [3], None)' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n' ||
        '    tower = main.Tower(None, None, None, None)' || E'\n' ||
        '    self.assertEqual(False, main.check_validity(tower))' || E'\n',
        'import java.util.ArrayList;' || E'\n' ||
        'import java.util.HashSet;' || E'\n' ||
        'import java.util.List;' || E'\n' ||
        'import java.util.Set;' || E'\n' || E'\n' ||
        'public class Main {' || E'\n' ||
        '  private final Integer numberOfDisks;' || E'\n' ||
        '  private List<Integer> rod1 = new ArrayList<>();' || E'\n' ||
        '  private List<Integer> rod2 = new ArrayList<>();' || E'\n' ||
        '  private List<Integer> rod3 = new ArrayList<>();' || E'\n' || E'\n' ||
        '  public Main(Integer numberOfDisks) {' || E'\n' ||
        '    this.numberOfDisks = numberOfDisks;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public Main(Integer numberOfDisks, List<Integer> rod1, List<Integer> rod2, List<Integer> rod3) {' || E'\n' ||
        '    this.numberOfDisks = numberOfDisks;' || E'\n' ||
        '    this.rod1 = rod1;' || E'\n' ||
        '    this.rod2 = rod2;' || E'\n' ||
        '    this.rod3 = rod3;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public static void main(String[] args) { }' || E'\n' || E'\n' ||
        '  boolean checkValidity() {' || E'\n' ||
        '    return false;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  boolean isRodWrong(List<Integer> rod) {' || E'\n' ||
        '    return false;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  Set<Integer> removeDisksFromSet(Set<Integer> disks, List<Integer> rod) {' || E'\n' ||
        '    return null;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public Integer getNumberOfDisks() {' || E'\n' ||
        '    return numberOfDisks;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public List<Integer> getRod1() {' || E'\n' ||
        '    return rod1;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public List<Integer> getRod2() {' || E'\n' ||
        '    return rod2;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  public List<Integer> getRod3() {' || E'\n' ||
        '    return rod3;' || E'\n' ||
        '  }' || E'\n' || E'\n' ||
        '  @Override' || E'\n' ||
        '  public String toString() {' || E'\n' ||
        '    return "Main{" +' || E'\n' ||
        '           "numberOfDisks=" + numberOfDisks +' || E'\n' ||
        '           ", rod1=" + rod1 +' || E'\n' ||
        '           ", rod2=" + rod2 +' || E'\n' ||
        '           ", rod3=" + rod3 +' || E'\n' ||
        '           "}";' || E'\n' ||
        '  }' || E'\n' ||
        '}' || E'\n' || E'\n',
        'import java.util.ArrayList;' || E'\n' ||
        'import java.util.Arrays;' || E'\n' ||
        'import java.util.Collections;' || E'\n' ||
        'import java.util.HashSet;' || E'\n' || E'\n'
            'import static org.junit.Assert.*;' || E'\n' || E'\n'
            'public class Test {' || E'\n' ||
        '  @org.junit.Test' || E'\n' ||
        '  public void testDefaultConstructor() {' || E'\n' ||
        '    Main tower = new Main(7);' || E'\n' ||
        '    assertEquals((Integer) 7, tower.getNumberOfDisks());' || E'\n' ||
        '    assertEquals(Arrays.asList(1, 2, 3, 4, 5, 6, 7), tower.getRod1());' || E'\n' ||
        '    assertEquals(new ArrayList<Integer>(), tower.getRod2());' || E'\n' ||
        '    assertEquals(new ArrayList<Integer>(), tower.getRod3());' || E'\n' ||
        '    tower = new Main(0);' || E'\n' ||
        '    assertEquals((Integer) 0, tower.getNumberOfDisks());' || E'\n' ||
        '    assertEquals(new ArrayList<>(), tower.getRod1());' || E'\n' ||
        '    tower = new Main(null);' || E'\n' ||
        '    assertEquals((Integer) 0, tower.getNumberOfDisks());' || E'\n' ||
        '    assertEquals(new ArrayList<>(), tower.getRod1());' || E'\n' ||
        '  }' || E'\n' || E'\n'
            '  @org.junit.Test' || E'\n' ||
        '  public void testSecondConstructor() {' || E'\n' ||
        '    Main tower = new Main(6, Arrays.asList(1, 2, 3), Arrays.asList(4, 6), Collections.singletonList(5));' ||
        E'\n' ||
        '    assertEquals((Integer) 6, tower.getNumberOfDisks());' || E'\n' ||
        '    assertEquals(Arrays.asList(1, 2, 3), tower.getRod1());' || E'\n' ||
        '    assertEquals(Arrays.asList(4, 6), tower.getRod2());' || E'\n' ||
        '    assertEquals(Collections.singletonList(5), tower.getRod3());' || E'\n' ||
        '    tower = new Main(null, null, null, null);' || E'\n' ||
        '    assertNull(tower.getNumberOfDisks());' || E'\n' ||
        '    assertNull(tower.getRod1());' || E'\n' ||
        '    assertNull(tower.getRod2());' || E'\n' ||
        '    assertNull(tower.getRod3());' || E'\n' ||
        '  }' || E'\n' || E'\n'
            '  @org.junit.Test' || E'\n' ||
        '  public void testRemoveDisks() {' || E'\n' ||
        '    Main tower = new Main(5, Arrays.asList(1, 3, 4), Arrays.asList(2, 5), new ArrayList<>());' || E'\n' ||
        '    assertNull(tower.removeDisksFromSet(null, Arrays.asList(1, 2)));' || E'\n' ||
        '    assertEquals(new HashSet<>(Arrays.asList(1, 2)), tower.removeDisksFromSet(new HashSet<>(Arrays.asList(1, 2)), null));' ||
        E'\n' ||
        '    assertNull(tower.removeDisksFromSet(null, null));' || E'\n' ||
        '    assertEquals(new HashSet<>(Arrays.asList(2, 5)), tower.removeDisksFromSet(new HashSet<>(Arrays.asList(1, 2, 3, 4, 5)), tower.getRod1()));' ||
        E'\n' ||
        '    assertEquals(new HashSet<>(Arrays.asList(2, 5)), tower.removeDisksFromSet(new HashSet<>(Arrays.asList(2, 5)), tower.getRod3()));' ||
        E'\n' ||
        '    assertEquals(new HashSet<>(), tower.removeDisksFromSet(new HashSet<>(Arrays.asList(2, 5)), tower.getRod2()));' ||
        E'\n' ||
        '    assertNull(tower.removeDisksFromSet(new HashSet<>(), tower.getRod1()));' || E'\n' ||
        '  }' || E'\n' || E'\n'
            '  @org.junit.Test' || E'\n' ||
        '  public void testWrongRod() {' || E'\n' ||
        '    Main tower = new Main(5, Arrays.asList(2, 4), new ArrayList<>(), Arrays.asList(1, 3, 5));' || E'\n' ||
        '    assertFalse(tower.isRodWrong(tower.getRod1()));' || E'\n' ||
        '    assertFalse(tower.isRodWrong(tower.getRod2()));' || E'\n' ||
        '    assertTrue(tower.isRodWrong(Arrays.asList(1, 2, 5, 4)));' || E'\n' ||
        '    assertTrue(tower.isRodWrong(null));' || E'\n' ||
        '  }' || E'\n' || E'\n'
            '  @org.junit.Test' || E'\n' ||
        '  public void testCheckValidity() {' || E'\n' ||
        '    Main tower = new Main(0);' || E'\n' ||
        '    assertTrue(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(2);' || E'\n' ||
        '    assertTrue(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(5, new ArrayList<>(), Arrays.asList(3, 4, 5), Arrays.asList(1, 2));' || E'\n' ||
        '    assertTrue(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(3, new ArrayList<>(), new ArrayList<>(), Arrays.asList(1, 3, 2));' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(1, new ArrayList<>(), new ArrayList<>(), new ArrayList<>());' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(2, new ArrayList<>(), Collections.singletonList(1), new ArrayList<>());' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(8, Arrays.asList(1, 2, 3), Arrays.asList(4, 5, 6), Arrays.asList(7, 9));' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(3, Arrays.asList(0, 1), Collections.singletonList(2), new ArrayList<>());' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(null, new ArrayList<>(), new ArrayList<>(), new ArrayList<>());' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(3, null, new ArrayList<>(), Arrays.asList(1, 2, 3));' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(3, Arrays.asList(1, 2, 3), null, new ArrayList<>());' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(3, Arrays.asList(1, 2), Collections.singletonList(3), null);' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '    tower = new Main(null, null, null, null);' || E'\n' ||
        '    assertFalse(tower.checkValidity());' || E'\n' ||
        '  }' || E'\n' ||
        '}' || E'\n',
        true, true, false, true);

INSERT INTO users(user_id, nickname, password)
VALUES (0, 'default', 'default');

INSERT INTO users(nickname, password)
VALUES ('abcd', 'abcd'),
       ('asdf', 'asdf');