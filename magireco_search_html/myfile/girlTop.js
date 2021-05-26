const GirlTop = {
  data() {
    return {
      searchWord: '',
      displayImages: false,
    }
  },
  mounted() {
    this.displayImages = localStorage.getItem('displayImages') === 'true';
  },
  watch: {
    searchWord: function(newValue) {
      const elements = document.getElementsByClassName('girlbox');
      [...elements].forEach(ele => {
        const isChecked = ele.getElementsByTagName('input')[0].checked;
        const isSearchTarget = ele.textContent.includes(newValue);
        ele.style.display = isChecked || isSearchTarget ? 'block' : 'none';
      })
    },
    displayImages: function(newValue) {
      localStorage.setItem('displayImages', this.displayImages);
      if (!newValue) {
        document.getElementsByClassName('magicalgirl')[0].classList.remove('visibleImage');
        return;
      }
      if (!(localStorage.getItem('isConfirmed') === 'true') && !window.confirm('全アイコンのダウンロードに7MBほど通信します。よろしいですか？')) {
        // FIXME キャンセルしたのにチェックボックスが付いちゃうバグがあります。実害はないですが…
        this.displayImages = false;
        return;
      }
      localStorage.setItem('isConfirmed', true);
      document.getElementsByClassName('magicalgirl')[0].classList.add('visibleImage');
    }
  }
}
