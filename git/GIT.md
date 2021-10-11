1. Basic configuration:

- nadanie nazwy i emailu ktore beda przy commit'ach

---

git config --global user.name "email@gmail.com"
git config --global user.email "username"

---

git clone [link do skopiowania z gita]
cd training otwiera ktory branch chce pobrac i edytowac | lub otworzyc folder z IDE

2. Commends:

- sprawdza czy jest zaupdatowany z gitem?

---

git status

---

- dodaje wszystkie (.) zmiany do stage'a?
- dodaje konkretne (file_name) zmiany do stage'a?

---

git add .
git add file_name

---

- dodanie komentarza

---

git commit -m"commit_message"
git commit -m"fixed word typo"
git commit -m"added new border"

---

- przywraca wszytkie zmiany (.) z plikow ktore nie sa w stage'u
- przywraca konkretne zmiany (file_name) z plikow ktore nie sa w stage'u

---

git restore .
git restore file_name

---

- przywraca wszytkie zmiany (.) z plikow ktore sa w stage'u
- przywraca konkretne zmiany (file_name) z plikow ktore sa w stage'u

---

git restore --staged .
git restore --staged file_name

---

- cofa zmiany o wybrana ilosc commit'ow (tutaj o '~1'), parametr '--soft' powoduje ze cofniete zmiany zostaja w statusie modify (stage 1)
- parametr '--hard' powoduje ze cofniete zmiany zostaja usuniete

---

git reset HEAD~1 --soft
git reset HEAD~1 --hard

---

- wypchnięcie zmian do głownego brancha online na github - będzie widoczne dla innych

---

git push origin

---

- 'pull' ściągniecie danych z najnowszej wersji osadzonej w internecie
- 'fetch' ściągniecie informacji o aktualnych zmianach, bez sciagania danych

---

git pull
git fetch

---

- pokazuje liste branchy
- tworzy branch'a o podanej nazwie, bez przeniesienia na ten branch

---

git branch
git branch branch_name

---

- przenosi na branch o wybranej nazwie
- '-b' tworzy branch o wybranej nazwie i odrazu przenosi

---

git checkout branch_name
git checkout -b branch_name

---

- dodaje zmiany z brancha na ktorym sie obecnie jest z branchem o wybranej nazwie

---

git merge branch_name

---

- przenosi zmiany do schowka
- 'git stash pop' przywraca zmiany ze schowka

---

git stash
git stash pop

---
