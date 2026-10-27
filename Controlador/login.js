const Usuarios=[
    {Usuario:'admin@gmail.com',clave:'123', rol:'admin',Nombre:'Admin MR'},
    {Usuario:'pepito@gmail.com',clave:'123', rol:'asociado',Nombre:'Juan Perez '}
]
document.getElementById("FormIniciarSesion").addEventListener("submit", function(e){
    e.preventDefault();
    const UsuarioInput = document.getElementById('Correo').value;
    const ClaveInput=document.getElementById('Contraseña').value;

    const usuarioEncontrado=Usuarios.find(
        u=> u.Usuario=== UsuarioInput && u.clave===ClaveInput
    );
    if(usuarioEncontrado){
        localStorage.setItem('logueado','true');
        localStorage.setItem('rol',usuarioEncontrado.rol);
        localStorage.setItem('Nombre',usuarioEncontrado.Nombre);
        window.location.href='dashboard.html';
    }else{
        alert('Usuario o contraseña incorrectos');
    }
});