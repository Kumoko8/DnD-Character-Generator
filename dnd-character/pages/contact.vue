<template>

<h1> Contact </h1>
    <form>


        <div>
            <input type="text" name="name" className="roboto-font" placeholder="Type your name here" required>
        </div>

        <div>
            <input type="email" name="email" className="roboto-font" placeholder='Type your email here' required>
        </div>

        <div>
            <input name="message" className="roboto-font" placeholder='Tell me a bit about yourself!' required>
        </div>


        <button type="submit" className="roboto-font">Submit</button>
    </form>
</template>