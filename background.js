// Service Worker'a bir event dinleyici ekleyin
chrome.runtime.onInstalled.addListener(function () {
    console.log("Extension yüklendi ve arka plan çalışmaya başladı.");
    // Burada başlangıç ayarları yapabilirsiniz
    // Örneğin, storage'a varsayılan değerler atayabilirsiniz
    chrome.storage.sync.set({ color: '#3aa757' }, function () {
        console.log("Varsayılan arka plan rengi ayarlandı.");
    });
});

// Diğer event dinleyicileri ve işlevler burada tanımlanabilir
