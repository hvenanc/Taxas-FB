export function setError(id, message) {
    const div = document.getElementById(id);
        div.innerHTML = 
        `
            <div class="empty-content">
                <div class="no-data">
                    <p>${message}</p>
                </div>
            </div>
        `
}